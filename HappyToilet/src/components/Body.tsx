import React from 'react'
import SchoolLink from "../data/LinkClip";

const Body = () => {
  return (
    <>
     {SchoolLink.map((data, index) => (
        <div className="flex">
          <p>{data.name}</p>{" "}
          <p className="underline underline-offset-auto cursor-pointer">
            <a href={data.linkVideo} target="_blank">{data.linkVideo}</a>
          </p>
        </div>
      ))}
    </>
  )
}

export default Body