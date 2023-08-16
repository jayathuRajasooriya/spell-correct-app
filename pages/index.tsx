import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent } from 'react'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'

export default function IndexPage() {
  const [text, setText] =  useState('');

  // const handleChange = (e) =>{
  //   setText({e.target.value});
  // }

  var apidata = "s";
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
       content: form.query.value as string,
    }

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

  
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    apidata = `${result.data}`
    setText(apidata)
    // alert(`Did you mean: ${apidata}`)
  }
  return (
    <div className="container">
      <h1 className={styles.title}>
        Spelling Correction
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Enter query</label>
        <input type="text" id="query" name="query" required />
        {/* <p>{text}</p> */}
        {/* <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required /> */}
        <button type="submit">Check</button>
        <p>{`${text}`}</p>
      </form>
    </div>
  )
}
