import { Button, Divider, FileInput, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconPaperclip } from '@tabler/icons-react'
import { useState } from 'react'

const ApplyJobComp = () => {
    const [preview, setPreview]=useState(false)
    const [submit, setSubmit] = useState(false)
    const handlePreveiw = ()=>{
        setPreview(!preview)
    }
    const handleSubmit =()=>{
        setSubmit(true)
    }
  return (
    <div className='w-2/3 mx-auto '> 
         <div className='flex justify-between mb-10 '>
            <div className='flex gap-2 items-center '>
                <div className='p-3 bg-gray-600 rounded-xl '>
                    <img className='h-14' src={`/Icons/Google.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-2xl'>Software Enginner III</div>
                    <div className='text-lg text-gray-300' > Google &#x2022; 3 days ago &#x2022; 48 Applicants </div>
                </div>
            </div>
        </div>
           <Divider my="mx" />
           <div className='text-xl font-semibold mb-5' >Submit Your Application</div>
           <div className='flex flex-col gap-5 '> 
              <div className='flex gap-10 [&>*]:w-1/2 '>
              <TextInput readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Full Name" withAsterisk placeholder='Enter Your Name'/>
              <TextInput readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Email" withAsterisk placeholder="Enter Your Email"/>
              </div>
              <div className='flex gap-10 [&>*]:w-1/2 '>
              <NumberInput readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Phone Number" hideControls withAsterisk placeholder='Enter Your Phone Number'/>
              <TextInput readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Personal Website" withAsterisk placeholder='Enter URL'/>
              </div>
               <FileInput readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk leftSection={<IconPaperclip stroke={1.5}/>}
                label="Attach Your CV"
                placeholder="Your CV"
                />
                <Textarea readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk placeholder='Type something about about yourself...' label="Cover Letter" autosize minRows={4}/>
                {!preview&&<Button color='yellow' onClick={handlePreveiw} variant='light'>Preview</Button>}
                {
                    preview && <div className='flex gap-10 [&>*]:w-1/2'>
                        <Button fullWidth color='yellow' onClick={handlePreveiw} variant='outline'>Edit</Button>
                        <Button fullWidth color='yellow' onClick={handleSubmit} variant='light'>Submit</Button>
                    </div>
                }
                
           </div>
    </div>
  )
}

export default ApplyJobComp