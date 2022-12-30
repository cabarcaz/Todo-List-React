import React, { useState } from 'react'

const FormTodo = props => {
  const [description, setDescription] = useState("")
  const {handleAddItem} = props
  const handleSumit = e => {
    e.preventDefault()
    handleAddItem({
      done:false,
      id:(+new Date()).toString(),
      description
    })
    setDescription("")
  }

  return (
    <form onSubmit={handleSumit}>
      <div>
        <div className='todo-list'>
          <div className='file-input'>
            <input type="text"
              className='text'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button className='button pink' disabled={description ? "" : "disabled"} >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormTodo
