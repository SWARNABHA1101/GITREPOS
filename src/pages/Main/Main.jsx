import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import Instance from "../../services/Instance"
import Loading from "../Utils/Loading"
import classes from './Main.module.css'
import { FiStar, FiShare2, FiCode } from "react-icons/fi";


const Main = () => {
    const [repos, setRepos] = useState({
        count: 0,
        repoList: [],
        error: null,
        loading: true
    })

    const [listConf, setListConf] = useState({
        q: 'language:Javascript',
        sort: 'stars',
        order: 'desc',
        page: 1
    })

    const handlePageChange = (page) => {
        // Validate the page number 
        console.log(page.selected)
        setListConf(conf => ({
            ...conf,
            page: page.selected + 1
        }))  
        setRepos(repos=> ({
            ...repos,
            loading: true
        }))
    }

    useEffect(()=> {
        Instance.get('', {params: listConf})
        .then(res=> {
            if(res.status >= 400 )
              throw new Error('Error fetching repos')
            setRepos(repos=> (
                {
                    ...repos,
                    repoList: res.data.items,
                    count: res.data.total_count,
                    loading: false
                }
            ))  
        })
        .catch(error=> {

        })

    }, [listConf])



    return (
        <div>
             <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageChange}
        pageCount={1000 / 30}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={classes.container}
        pageClassName={classes.page}
        activeClassName={classes.activePage}
        previousClassName={classes.previous}
        nextClassName={classes.next}
      />
        {repos.loading ? <Loading/> : <RepoContainer onPageChange={handlePageChange} count={repos.count}  items={repos.repoList}/>}
        </div>
    )
}



const RepoContainer = ({count, items, onPageChange}) => {
    return (
        <div className='flex flex-wrap p-5'>
            {items.map(item=> <Repo key={item.id} data={item}/>)}
        </div>
    )
}



const Repo = ({data}) => {
    // Name Description Owner_name Stars_Count Number_Of_Forks Language
    const handleRedirect = (event) => {
        window.open(data.html_url, '_blank');
    }

    return (
        <div onClick={handleRedirect} className="p-5 basis-1/4 cursor-pointer">
            <div className="flex justify-between">
            <div className="grow-1">
            <p className="pb-0 mb-0 text-xs">{data.name}</p>
            <p className="text-lg">{data.full_name}</p>
            <p className="text-sm text-gray-800/75 h-24 overflow-hidden mb-5">{data.description}</p>
            </div>
            <div>
            <img className={classes.avatar} src={data.owner.avatar_url} width='42px' />
            </div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center">
                  <FiStar size={'14px'}/>
                  <p className="pl-1 text-sm">{data.stargazers_count}</p>
                </div>
                <div className="flex items-center">
                  <FiShare2 size={'14px'}/>
                  <p className="pl-1 text-sm">{data.forks_count}</p>
                </div>
                <div className="flex items-center">
                  <FiCode size={'14px'}/>
                  <p className="pl-1 text-sm">{data.language}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Main