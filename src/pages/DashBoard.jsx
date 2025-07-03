import React from 'react'
import '../Blog.css'

const DashBoard = () => {
  return (
    <>

    <div class = "heading">
        <aside class="bg-gray-900 text-white w-full md:w-1/4 p-6">
            <h2 class="text-xl font-bold mb-4">Sidebar</h2>

            <ul class="space-y-2">
                <li>
                    <a href="#" class="hover:text-gray-300">Dashboard</a>
                </li>

                <li>
                    <a href="#" class="hover:text-gray-300">Dashboard</a>
                </li>

                <li>
                    <a href="#" class="hover:text-gray-300">Setting</a>
                </li>

                <li>
                    <a href="#" class="hover:text-gray-300">Profile</a>
                </li>

                <li>
                    <a href="#" class="hover:text-gray-300">Logout</a>
                </li>
            </ul>
           
        </aside>

        <main class="flex-1 bg-gray-100 p-6">
            <h1 class="text-2xl font-semibold mb-4">Main Content</h1>

            <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Laboriosam voluptate commodi maiores 
                odit adipisci explicabo, recusandae quas, facilis ratione, 
                dolor cumque. Necessitatibus molestiae soluta rerum vel facilis illo perspiciatis voluptas iure, fuga nemo. Sunt, velit. Enim eos ratione perspiciatis corrupti exercitationem? Voluptatibus dolorem tenetur odio ad distinctio quo nostrum libero fugit obcaecati cupiditate fuga deserunt, 
                alias, laborum velit quia voluptas.</p>

                <div>
                    <div>Box1</div>
                    <div>Box2</div>
                </div>
        </main>
    </div>


    
    
    </>
  )
}

export default DashBoard