import { Button, TextInput } from '@mantine/core'

const Subscribe = () => {
  return (
    <div className='mt-20 flex items-center bg-gray-700 mx-20 py-3 rounded-xl justify-around'> 
         <div className='text-4xl w-2/5 text-center  font-semibold text-gray-100'>Never Wants to Miss Any <span className='text-amber-400'>Job News?</span></div>
            <div className='flex rounded-xl gap-4 bg-gray-600 px-2 py-3 items-center'>
                <TextInput
                className='[&_input]:text-gray-100 font-semibold'
                variant="unstyled"
                placeholder="your@gmail.com"
                size='xl'
                 />
                 <Button className='rounded-lg!' size='lg' color='yellow' variant="filled">Subscribe</Button>
            </div>
    </div>
  )
}

export default Subscribe