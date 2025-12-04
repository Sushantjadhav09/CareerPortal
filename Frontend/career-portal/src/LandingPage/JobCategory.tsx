import { Carousel } from '@mantine/carousel'
import { jobCategory } from '../Data/Data'

const JobCategory = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-4xl text-center mb-3 font-semibold text-gray-100'>Browse <span className='text-amber-400'>Job</span> Category</div>
        <div className='text-lg mx-auto mb-10 text-gray-300 text-center w-1/2'> Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
              <Carousel
              slideSize="22%"
              slideGap="md"
              controlsOffset="sm"
              controlSize={26}
              withControls
              withIndicators={false}
          >
            {
            jobCategory.map((category,index)=><Carousel.Slide>
                <div className='flex flex-col items-center w-64 gap-2 border border-amber-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-amber-300'>
            <div className='p-2 bg-amber-300 rounded-full'>
                <img className='h-8 w-9' src={`/Category/${category.name}.png`} alt={category.name} />
            </div>
            <div className='text-gray-100 text-xl font-semibold'>{category.name}</div>
            <div className='text-sm text-gray-300 text-center'>{category.desc}</div>
            <div className='text-amber-300 text-lg'>{category.jobs}+ new job posted</div>
        </div>
            </Carousel.Slide>)
          }
          </Carousel>
          
        
    </div>
  )
}

export default JobCategory