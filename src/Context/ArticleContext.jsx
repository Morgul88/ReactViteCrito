import { useContext, createContext, useState, useEffect } from "react"

const ArticleContext = createContext();
export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticles();

        
    }, []);

    
    const createArticles = async (id) => {
        const result = await fetch(`${apiUrl}`,{
            method: 'post',
            headers: {
                'content.type': 'application.json'
            },
            body: JSON.stringify(articles)
        })
        setArticles(await result.json())

        if (result.status === 201)
            setArticles(await result.json())
    }


    const getArticles = async () => {
        const result = await fetch(apiUrl)
        setArticles(await result.json())
        
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`);
        setArticle(await result.json());
    }

    const updateArticles = async (id, updateArticles) => {
        const result = await fetch(`${apiUrl}/${id}`,{
            method: 'put',
            headers: {
                'content.type': 'application.json'
            },
            body: JSON.stringify(updateArticles)
            
        })

        if (result.status === 200){
            getArticles()
        }
    }

    const deleteArticles = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`,{
            method: 'delete',
            
        })

        if (result.status === 200){
            getArticles()
        }
    }

    const clearArticle = () => {
        setArticle({})
    }
    
    return(
        <ArticleContext.Provider value={{articles,article,getArticles,getArticle,createArticles,updateArticles,deleteArticles,clearArticle}}>
            {children}
        </ArticleContext.Provider>
    )

        
    

    
}
