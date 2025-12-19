import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core"
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from "../Services/Utilities";
import { applyJob } from "../Services/JobService";
import { notifications } from "@mantine/notifications";

const ApplicationForm = () => {
    const {id}= useParams();
     const [preview, setPreview]=useState(false)
    const [submit, setSubmit] = useState(false)    
    const handlePreveiw = ()=>{
        form.validate();
        window.scrollTo({top:0, behavior:'smooth'})
        if(!form.isValid())return;
        setPreview(!preview);
    }
    const handleSubmit = async()=>{
       setSubmit(true);
       let resume:any = await getBase64(form.getValues().resume);
       let applicant = {...form.getValues(), resume:resume.split(',')[1]};
       applyJob(id,applicant).then((res)=>{
        setSubmit(false);
        notifications.show({
                title: 'Application Submitted',
                message: 'Your application has been applied successfully 🎉',
                color: 'green',
              });
       }).catch((err)=>{
        setSubmit(false);
        notifications.show({
        title: 'Error',
        message: 'Failed to apply job. Please try again.',
        color: 'red',
      });       })
    }
    const form = useForm({   
            mode:'controlled',
            validateInputOnChange:true,
            initialValues:{
                name:'',
                email:'',
                phone:'',
                website:'',
                resume:null,
                coverLetter:'', 
            },
            validate:{
                name: isNotEmpty('Name cannot be empty'),
                email: isNotEmpty('eamil cannot be empty'),
                phone: isNotEmpty('phone cannot be empty'),
                website: isNotEmpty('website cannot be empty'),
                resume: isNotEmpty('resume cannot be empty'),
            }
        })
  return (
    <div>
         <LoadingOverlay className='fixed!'
    visible={submit}
    zIndex={1000}
    overlayProps={{radius:'sm', blur:2}}
    loaderProps={{color:'yellow',type:'bars'}}
    />
        <div className='text-xl font-semibold mb-5' >Submit Your Application</div>
           <div className='flex flex-col gap-5 '> 
              <div className='flex gap-10 [&>*]:w-1/2 '>
              <TextInput {...form.getInputProps("name")} readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Full Name" withAsterisk placeholder='Enter Your Name'/>
              <TextInput {...form.getInputProps("email")} readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Email" withAsterisk placeholder="Enter Your Email"/>
              </div>
              <div className='flex gap-10 [&>*]:w-1/2 '>
              <NumberInput {...form.getInputProps("phone")} readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Phone Number" hideControls withAsterisk placeholder='Enter Your Phone Number'/>
              <TextInput {...form.getInputProps("website")} readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} label="Personal Website" withAsterisk placeholder='Enter URL'/>
              </div>
               <FileInput {...form.getInputProps("resume")} accept="application/pdf" readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk leftSection={<IconPaperclip stroke={1.5}/>}
                label="Attach Your CV"
                placeholder="Your CV"
                />
                <Textarea {...form.getInputProps("coverLetter")} readOnly={preview} className={`${preview?"text-gray-300 font-semibold":""}`} variant={preview?"unstyled":"default"} withAsterisk placeholder='Type something about about yourself...' label="Cover Letter" autosize minRows={4}/>
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

export default ApplicationForm