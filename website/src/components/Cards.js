import React, { Component } from 'react'
import Card from './Card'
import UniversityConsumer from '../context'

class Cards extends Component {
  render() {
    return (
      <UniversityConsumer>
        {
            value =>{
                const {universities}=value
                return(
                    <div>
                        {universities.map((university)=>{
                            return(
                                <Card
                                    key={university.id}
                                    name={university.name}
                                    picRef={university.picRef}
                                />
                            )
                        }     
                        )}
                    </div>
                )
            }
        }
      </UniversityConsumer>
    )
  }
}
export default Cards