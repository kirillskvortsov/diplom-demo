import React, { useState } from 'react';
import SearchTable from '../Tables/SearchTable';
import SearchModal from '../Modals/SearchModal';
import SearchBar from '../Search/SearchBar';

function SearchPage() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <main className="main main-search">
            <SearchBar />
            <SearchTable 
                onClick={() => setModalShow(true)}    
            />
            <SearchModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </main>
    );
}

export default SearchPage;