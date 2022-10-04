import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
<div class="flex items-center justify-center">
    <div class="grid grid-cols-1 gap-64 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-4">
        {/* <!-- 1 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-8 mx-8 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-white-500 left-4 -top-6">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="24.000000pt" height="24.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#461d5b" stroke="none">
<path d="M241 419 c-26 -26 -31 -38 -31 -79 0 -41 5 -53 31 -79 26 -26 38 -31
79 -31 41 0 53 5 79 31 26 26 31 38 31 79 0 41 -5 53 -31 79 -26 26 -38 31
-79 31 -41 0 -53 -5 -79 -31z"/>
<path d="M219 160 c-45 -24 -99 -84 -99 -110 0 -19 8 -20 200 -20 192 0 200 1
200 20 0 27 -55 87 -101 111 -51 26 -150 25 -200 -1z"/>
</g>
</svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">For myself</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>Write better.Think more clearly. Stay Organised</p> 
                </div>
                
            </div>
        </div>

        {/* <!-- 2 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-8 mx-20 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-white-500 left-4 -top-6">
                
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M24 176 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z"/>
<path d="M94 176 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
-13 2 -25 -3 -28 -12z"/>
<path d="M164 176 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
-13 2 -25 -3 -28 -12z"/>
<path d="M17 99 c-23 -14 -22 -49 2 -49 13 0 20 9 23 30 5 33 2 35 -25 19z"/>
<path d="M78 99 c-10 -5 -18 -19 -18 -29 0 -18 7 -20 60 -20 53 0 60 2 60 20
0 34 -63 52 -102 29z"/>
<path d="M198 80 c3 -21 10 -30 23 -30 25 0 25 36 0 50 -27 14 -28 14 -23 -20z"/>
</g>
</svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">With my team</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>wikis, docs,tasks and project, all in ine place</p> 
                </div>
                
                </div>
            </div>
        </div>
      
    </div>
    
  );
}
