import React, { useState } from 'react'
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    company: '',
    salary: '',
    position: '',
    area: '',
    level: '',
    image: '',
    language: '',
    postTime: '',
    quantity: '',
    experience: '',
    education: '',
    description: '',
    requirements: '',
    employername: '',
    gmail: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validate = () => {
    let tempErrors = {}
    tempErrors.company = formData.company ? '' : 'This field is required'
    tempErrors.salary = formData.salary ? '' : 'This field is required'
    tempErrors.position = formData.position ? '' : 'This field is required'
    tempErrors.area = formData.area ? '' : 'This field is required'
    tempErrors.level = formData.level ? '' : 'This field is required'
    tempErrors.image = formData.image ? '' : 'This field is required'
    tempErrors.language = formData.language ? '' : 'This field is required'
    tempErrors.postTime = formData.postTime ? '' : 'This field is required'
    tempErrors.quantity = formData.quantity ? '' : 'This field is required'
    tempErrors.experience = formData.experience ? '' : 'This field is required'
    tempErrors.education = formData.education ? '' : 'This field is required'
    tempErrors.description = formData.description ? '' : 'This field is required'
    tempErrors.requirements = formData.requirements ? '' : 'This field is required'
    tempErrors.employername = formData.employername ? '' : 'This field is required'
    tempErrors.gmail = formData.gmail ? '' : 'This field is required'

    setErrors(tempErrors)
    return Object.values(tempErrors).every((x) => x === '')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      const data = new FormData()
      data.append('company', formData.company)
      data.append('salary', formData.salary)
      data.append('position', formData.position)
      data.append('area', formData.area)
      data.append('level', formData.level)
      data.append('image', formData.image) // Append the file
      data.append('language', formData.language)
      data.append('postTime', formData.postTime)
      data.append('quantity', formData.quantity)
      data.append('experience', formData.experience)
      data.append('education', formData.education)
      data.append('description', formData.description)
      data.append('requirements', formData.requirements)
      data.append('employername', formData.employername)
      data.append('gmail', formData.gmail)

      try {
        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          body: data
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        // Handle successful form submission
        alert('Form được gửi thành công')
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
        alert('Failed to submit form')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className='form-group'>
        <label>Công ty</label>
        <input type='text' name='company' value={formData.company} onChange={handleChange} />
        {errors.company && <p className='error'>{errors.company}</p>}
      </div>
      <div className='form-group'>
        <label>Lương</label>
        <input type='text' name='salary' value={formData.salary} onChange={handleChange} />
        {errors.salary && <p className='error'>{errors.salary}</p>}
      </div>
      <div className='form-group'>
        <label>Vị trí</label>
        <input type='text' name='position' value={formData.position} onChange={handleChange} />
        {errors.position && <p className='error'>{errors.position}</p>}
      </div>
      <div className='form-group'>
        <label>Khu vực</label>
        <input type='text' name='area' value={formData.area} onChange={handleChange} />
        {errors.area && <p className='error'>{errors.area}</p>}
      </div>
      <div className='form-group'>
        <label>Level</label>
        <input type='text' name='level' value={formData.level} onChange={handleChange} />
        {errors.level && <p className='error'>{errors.level}</p>}
      </div>
      <div className='form-group'>
        <label>Ảnh</label>
        <input type='file' name='image' value={formData.image} onChange={handleChange} />
        {errors.image && <p className='error'>{errors.image}</p>}
      </div>
      <div className='form-group'>
        <label>Language</label>
        <input type='text' name='language' value={formData.language} onChange={handleChange} />
        {errors.language && <p className='error'>{errors.language}</p>}
      </div>
      <div className='form-group'>
        <label>Thời gian đăng</label>
        <input type='time' name='postTime' value={formData.postTime} onChange={handleChange} />
        {errors.postTime && <p className='error'>{errors.postTime}</p>}
      </div>
      <div className='form-group'>
        <label>Số lượng</label>
        <input type='number' name='quantity' value={formData.quantity} onChange={handleChange} />
        {errors.quantity && <p className='error'>{errors.quantity}</p>}
      </div>
      <div className='form-group'>
        <label>Kinh nghiệm</label>
        <input type='text' name='experience' value={formData.experience} onChange={handleChange} />
        {errors.experience && <p className='error'>{errors.experience}</p>}
      </div>
      <div className='form-group'>
        <label>Education</label>
        <input type='text' name='education' value={formData.education} onChange={handleChange} />
        {errors.education && <p className='error'>{errors.education}</p>}
      </div>
      <div className='form-group'>
        <label>Mô tả</label>
        <textarea name='description' value={formData.description} onChange={handleChange}></textarea>
        {errors.description && <p className='error'>{errors.description}</p>}
      </div>
      <div className='form-group'>
        <label>Yêu cầu</label>
        <textarea name='requirements' value={formData.requirements} onChange={handleChange}></textarea>
        {errors.requirements && <p className='error'>{errors.requirements}</p>}
      </div>
      <div className='form-group'>
        <label>Nhà tuyển dụng</label>
        <textarea name='employername' value={formData.employername} onChange={handleChange}></textarea>
        {errors.employername && <p className='error'>{errors.employername}</p>}
      </div>
      <div className='form-group'>
        <label>Gmail</label>
        <textarea name='gmail' value={formData.gmail} onChange={handleChange}></textarea>
        {errors.gmail && <p className='error'>{errors.gmail}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
