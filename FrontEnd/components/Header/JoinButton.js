import React from 'react'
import { useTranslation } from 'react-i18next';
const JoinButton = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='h-[44px] bg-[#003459] rounded-[57px]  min-w-[160px] hidden laptop:centreFlex cursor-pointer'>
        <div className="px-[28px] text-16-24-700 text-[#FDFDFD]">{'Login Now'}</div>
    </div>
  )
}

export default JoinButton