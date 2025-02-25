function Footer() {
  return (
       <footer className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-1 px-6 bg-blue shadow sm:items-baseline w-full fixed bottom-0 dark:bg-blue-dark">
          <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} LShop. All Rights Reserved.</p>
          </div>       
        </footer>
  )
}

export default Footer