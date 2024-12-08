import React from 'react'

function Footer() {
  return (
    <div>
       <footer class="bg-black text-center lg:text-left p-4">
  <div class="container mx-auto p-4">
    <div class="flex flex-wrap justify-center lg:justify-between mb-4">
      <div class="w-full lg:w-1/2 xl:w-1/3 mb-4 lg:mb-0">
        <h5 class="uppercase text-gray-600 mb-2 text-xl font-bold">About Me</h5>
        <p class="text-gray-600">
          I'm Manisha Singh, a passionate frontend developer with expertise in  
          React and Tailwind CSS.
        </p>
      </div>
      <div class="w-full lg:w-1/2 xl:w-1/3 mb-4 lg:mb-0">
        <h5 class="uppercase text-gray-600 mb-2 text-xl font-bold">Social Media</h5>
        <ul class="list-none mb-0">
          <li class="mb-2">
            <a href="https://www.linkedin.com/in/manisha-rajput-527869243/" class="text-gray-600 hover:text-gray-900">LinkedIn</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600 hover:text-gray-900">Twitter</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600 hover:text-gray-900">GitHub</a>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-1/2 xl:w-1/3 mb-4 lg:mb-0">
        <h5 class="uppercase text-gray-600 mb-2 text-xl font-bold">Contact Me</h5>
        <ul class="list-none mb-0">
          <li class="mb-2">
            <a href="mailto:manishasinghrajput3435@gamil.com" class="text-gray-600 hover:text-gray-900">manishasinghrajput3435@gamil.com</a>
          </li>
          <li class="mb-2">
            <a href="tel:7070553435" class="text-gray-600 hover:text-gray-900">(+91) 7070553435</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center lg:justify-between mb-4">
      <p class="text-gray-600">&copy; 2024 Manisha Singh. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer