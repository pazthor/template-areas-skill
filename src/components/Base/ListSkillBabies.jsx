import React from 'react'
import ItemSkillBaby from './ItemSkillBaby'

const ListSkillBabies = (params) => {
    return (
        <>
           <div id='list-skill-babies'>
              <ul>
                  <li>
                  <ItemSkillBaby></ItemSkillBaby>
                  </li>
                  <li>
                      <div id='list-item'>
                        <div id='description-item'>
                            <span id='subject'>Babbies like imitating Conversation.</span>
                            <span id='description'>Usually achieved by 2-4 mounts.</span>
                        </div>
                        <div id='button-item'>
                            <button id='button-state'> Completed</button>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div id='list-item'>
                        <div id='description-item'>
                            <span id='subject'>Babbies like imitating Conversation.</span>
                            <span id='description'>Usually achieved by 2-4 mounts.</span>
                        </div>
                        <div id='button-item'>
                            <button id='button-state'> Completed</button>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div id='list-item'>
                        <div id='description-item'>
                            <span id='subject'>Babbies like imitating Conversation.</span>
                            <span id='description'>Usually achieved by 2-4 mounts.</span>
                        </div>
                        <div id='button-item'>
                            <button id='button-state'> Completed</button>
                        </div>
                      </div>
                  </li>
              </ul>
          </div>
       
        </>
    )
}

export default ListSkillBabies