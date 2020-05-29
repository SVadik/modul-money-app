import React from 'react'

export function AccountInfo ({displayedAccount}) {
  return (
    <div className="col-lg"> 
      <div className="card">
        <div className="card-body">
          <div className="card-title">Title here{displayedAccount.number}</div>
        </div>
      </div>
    </div>
  )
}