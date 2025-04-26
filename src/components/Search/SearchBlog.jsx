import algoliasearch from 'algoliasearch/lite'
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";
import { Link } from "react-router";

const searchClient = algoliasearch('LVKCS8LKZB', '67aece13ff00060374a7cc452fe009ce')

const indexName = 'posts'

const SearchBlog = () => {
    return (
        <InstantSearch searchClient={searchClient} indexName={indexName}>
            <div>
                <SearchBox translations={{placeholder:'جستجو در پست ها...'}}/>
                <Hits hitComponent={PostHit} />
            </div>
        </InstantSearch>
    )
}

const PostHit = ({ hit }) => {
    <div>
        <h3>{hit.title}</h3>
        <p>{hit.content.slice(0, 100)}</p>
        <Link to={`/blog/post/${hit.slug}`} >ادامه مطلب</Link>
    </div>
}

export default SearchBlog