import React from 'react'
import { useTranslation } from 'react-i18next';
const JoinButton = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='h-[44px] bg-[#003459] rounded-[57px]  min-w-[204px] hidden laptop:centreFlex '>
        <div className="px-[28px] text-16-24-700 text-[#FDFDFD]">{t('Community.1')}</div>
    </div>
  )
}

export default JoinButton