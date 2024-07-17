"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'

interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent(props:PROPS) {

    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    const [loading, setLoading]=useState(false);
    const [aiOutput, setAIOutput]=useState<string>('');
    const {user}= useUser();
    const router=useRouter();
    const {totalUsage, setTotalUsage}=useContext(TotalUsageContext)

    const GenerateAIContent=async(formData:any)=>{
      if(totalUsage>=10000)
      {
        console.log("Please Upgrade")
        router.push('/dashboard/billing')
        return ;

      }

      setLoading(true);

      const SelectedPrompt = selectedTemplate?.aiPrompt;

      const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt);

      setAIOutput(result?.response.text());
      await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug,result?.response.text())
      setLoading(false)

    }

    const SaveInDb = async(formData:any,slug:any,aiResp:string)=>{
      const result=await db.insert(AIOutput).values({
        formData:formData,
        templateSlug:slug,
        aiResponse:aiResp,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format("DD/MM/yyyy"),
      });

      console.log(result);
    }

  return (
    <div className='p-5'>
      <Link href={"/dashboard"}>
        <Button> <ArrowLeft/> Back </Button>
      
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* { Form Section } */}
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=>GenerateAIContent(v)}
        loading = {loading}
        />


        {/* { Output Section } */}
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
        </div>

    </div>
    </div>
  )
}

export default CreateNewContent