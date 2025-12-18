import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { useForm, isNotEmpty } from '@mantine/form';
import { content, fields } from "../Data/PostJob"
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { postJob } from "../Services/JobService";
import { notifications } from "@mantine/notifications";

const PostJob = () => {
    const select = fields;
    const form = useForm({ 
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            jobTitle:'',
            company:'',
            experience:'',
            jobtype:'',
            location:'',
            packageOffered:null, 
            skillsRequired: [],
            about:'',
            description:"",

        },
        validate:{
            jobTitle: isNotEmpty('Title  is required'),
            company: isNotEmpty('company  is required'),
            experience: isNotEmpty('experience is required'),
            jobtype: isNotEmpty('jobtype  is required'),
            location: isNotEmpty('location  is required'),
            packageOffered: isNotEmpty('package  is required'),
            skillsRequired: (value) =>
            value.length === 0 ? 'Skills are required' : null,            
            about: isNotEmpty('about  is required'),
            description: isNotEmpty('description  is required'),
            

        }
    })
   const handlePost = (values: typeof form.values) => {
  postJob(values)
    .then(() => {
      notifications.show({
        title: 'Job Posted',
        message: 'Your job has been posted successfully 🎉',
        color: 'green',
      });
    })
    .catch((err) => {
      console.error(err);
      notifications.show({
        title: 'Error',
        message: 'Failed to post job. Please try again.',
        color: 'red',
      });
    });
};

  return (<div className="w-4/5 mx-auto">
    <div className="text-2xl font-semibold">Post a Job</div>
    <form onSubmit={form.onSubmit(handlePost)}>
    <div className="flex flex-col gap-5">   
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]}/>
            <SelectInput form={form} name="company" {...select[1]}/>
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="experience" {...select[2]}/>
            <SelectInput form={form} name="jobtype" {...select[3]}/>
        </div> 
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="location" {...select[4]}/>
            <NumberInput {...form.getInputProps('packageOffered')} withAsterisk label="salary" placeholder="Enter salary" />
        </div>
        <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter skills" clearable acceptValueOnBlur splitChars={[',',' ','|']} />
        <Textarea {...form.getInputProps('about')} withAsterisk className="my-3" label='About JOb' autosize placeholder="Enter about job.." minRows={2}/>
        <div className="[&_button[data-active='true']]:!text-amber-400 [&_button[data-active='true']]:!bg-amber-400/20">
        <div className="text-sm font-medium">Job Description</div>
        <TextEditor form={form}/>
        </div>
        <div className="flex gap-4 w-100">
            
            <Button type="submit" color="yellow" variant="light" fullWidth>
            Publish Job 
            </Button>
            <Button color='yellow' variant='outline' fullWidth>Save as a draft</Button>
            
        </div>
    </div>
    </form>
  </div>
  )
}

export default PostJob


 

