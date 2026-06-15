

const Secpage = () => {
  return (
    <div className="">
     <header className="h-30  bg-amber-200 relative left-30 w-328"></header>
     
      <section className="bg-amber-700 h-179 w-35 relative bottom-30">
       <div className="flex justify-center pt-7">
         <img className="w-25" src="logo.svg" alt="" />
       </div>
       <div className="flex justify-center items-center gap-2">
        <img src="arrow.svg" alt="" />
        <div>Dashboard</div>
       </div>
       <div className="flex justify-center items-center gap-2"> 
        <img src="book.svg" alt="" />
        <div>Test Creation</div>
       </div>
       <div className="flex justify-center items-center gap-2"> 
        <img src="Trac.svg" alt="" />
        <div>Test Tracking</div>
       </div>
       
      </section>

    </div>
  )
}

export default Secpage
