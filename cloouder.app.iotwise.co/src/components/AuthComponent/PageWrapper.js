import React from 'react'
import { PageHeader } from '../PageHeader'

export const PageWrapper = ({children, title, icon, buttons}) => {
  return (
    <div>

      {/* Page Header */}
      <PageHeader
        title={title}
        icon={icon}
        buttons={buttons}
      />

      {children}
    </div>
  )
}
