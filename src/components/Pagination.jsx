import { useState } from "react"

const Pagination = ({page_size, count}) => {
    const [pageCount, setPageCount] = useState(count / page_size)
    
    function paginate () {
        const pages = []
        for(let i = 0; i < 5; i++){
            pages.push(<li>
                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  {i + 1}    
                </a>
                </li>)
        }

        return pages
    }

    return (
        <nav aria-label="Page navigation example">
        <ul className="flex justify-end">
        <li>
      <a href="#" class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
            {paginate()}
            <li>
      <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
        </ul>
        </nav>
    )
}

export default Pagination