import React from 'react'
import { Outlet } from 'react-router-dom'

function UserHome() {
  return (
    <>
      {/* outer Container */}
      <div>
        {/* User Details Container */}
        <div>
          <div>
            <div>
              <div>upper portion</div>
              <div>lower Portion</div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
        {/* User Body Container */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default UserHome