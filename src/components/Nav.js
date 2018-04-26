
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default function Nav () {
  return (

    <div>
        <Menu pointing secondary>
          <Menu.Item name="home" header as={NavLink} exact to="/" />
          <Menu.Item name="leaderboard" header as={NavLink} to="/leaderboard" />
          <Menu.Item name="New" header as={NavLink} to="/create" />

        </Menu>

      </div>
  )
}
