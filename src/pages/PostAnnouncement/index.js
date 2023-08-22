import React from 'react'
import SelectBox from '../../components/SelectBox'
import Button from '../../components/Button'

export default function PostAnnouncement() {
  return (
    <div className='main-container px-0 pt-8 pb-4'>
    <div className='bg-[#040B476f] w-full py-2'>
        <h3 className='text-[#040C50] text-[24px] font-bold'>Post Announcement</h3>
    </div>
    <div className='py-2'>
        <div className='mx-auto w-48'>
        <SelectBox options={['New post']} className1={'rounded-none rounded-t-2xl border-[#DFDFDF] border-2 shadow-none text-center'} size={10} />
        </div>
    </div>
    <div className='mt-11'>
        <h4 className='text-[14px] text-gray-950 font-bold'>
            Take a photo
        </h4>
        <div className='border-2 border-[#0247FF] flex justify-center items-center p-5 mx-auto w-[160px] h-[144px] rounded-t-2xl'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="89" height="75" viewBox="0 0 89 75" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7584 9.51738C25.6194 6.37437 26.5499 4.80721 27.8465 3.66548C28.9932 2.65486 30.3422 1.89181 31.8067 1.42543C33.4604 0.900147 35.3038 0.900146 38.995 0.900146H49.601C53.2966 0.900146 55.14 0.900147 56.7937 1.42543C58.2582 1.89181 59.6072 2.65486 60.7539 3.66548C62.0504 4.80721 62.981 6.37437 64.842 9.51738L67.4527 13.9237H70.7602C76.9342 13.9237 80.0212 13.9237 82.3805 15.1045C84.4545 16.1459 86.1402 17.8069 87.1963 19.8494C88.4002 22.1719 88.4002 25.2107 88.4002 31.2884V57.3354C88.4002 63.4131 88.4002 66.4519 87.1963 68.7744C86.1395 70.8153 84.4538 72.4747 82.3805 73.515C80.0212 74.7001 76.9342 74.7001 70.7602 74.7001H17.8402C11.6662 74.7001 8.5792 74.7001 6.21985 73.515C4.14497 72.4754 2.45765 70.816 1.39972 68.7744C0.200196 66.4519 0.200195 63.4131 0.200195 57.3354V31.2884C0.200195 25.2107 0.200196 22.1719 1.39972 19.8494C2.4569 17.8062 4.1443 16.1452 6.21985 15.1045C8.5792 13.9237 11.6662 13.9237 17.8402 13.9237H21.1477L23.7584 9.51738ZM44.3002 61.8937C49.8558 61.8937 55.1839 59.7212 59.1123 55.854C63.0407 51.9869 65.2477 46.742 65.2477 41.2731C65.2477 35.8042 63.0407 30.5592 59.1123 26.6921C55.1839 22.825 49.8558 20.6525 44.3002 20.6525C38.7446 20.6525 33.4165 22.825 29.4881 26.6921C25.5597 30.5592 23.3527 35.8042 23.3527 41.2731C23.3527 46.742 25.5597 51.9869 29.4881 55.854C33.4165 59.7212 38.7446 61.8937 44.3002 61.8937ZM56.2072 41.2731C56.2072 44.3817 54.9527 47.3631 52.7197 49.5612C50.4867 51.7594 47.4581 52.9943 44.3002 52.9943C41.1423 52.9943 38.1137 51.7594 35.8807 49.5612C33.6477 47.3631 32.3932 44.3817 32.3932 41.2731C32.3932 38.1644 33.6477 35.1831 35.8807 32.985C38.1137 30.7868 41.1423 29.5519 44.3002 29.5519C47.4581 29.5519 50.4867 30.7868 52.7197 32.985C54.9527 35.1831 56.2072 38.1644 56.2072 41.2731Z" fill="black"/>
            </svg>
            </span>
        </div>
        <Button className={'from-[#0247FF] to-[#0247FF] rounded-none rounded-t-lg mt-3 text-white w-[108px] h-[32px]'} text={'Browse'}/>
    </div>
    <div className='px-6 mt-3'>
        <div className='flex'>
            <h3 className='text-[18px] font-bold'>Massage</h3>
        </div>
        <div className=''>
            <textarea className='w-full rounded-t-2xl' rows={4}>Massage special today from 12 to 5pm<br/>last day in town </textarea>
        </div>
    </div>
    <div className='px-4 mt-2'>
        <Button text={'Schedule time >'} className={'rounded-none rounded-t-2xl text-[#040C50] text-[21px]'} />
    </div>
</div>
  )
}
