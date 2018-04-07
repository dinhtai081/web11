$(document).ready(() => {
    listenToFormSubmitEvent()
})

const listenToFormSubmitEvent = () => {
    // const formElement = $(".article-search-form");
    // formElement.on("submit", async event => {
    //     event.preventDefault()
    const throttledSearch = _.throttle(search,1000)
    const inputElement = $("#article-search-form__input");
    inputElement.on("input", ()=>{
        clearData();
        throttledSearch();
    });
    /**
     * TODO:
     *  - Lấy từ khoá search của người dùng
     *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
     *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
     *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
     */

    //    })
}
function clearData(){
    $(".article-list").empty();
}

async function search() {
   
    const searchQuery = await getSearchQuery();
    if (searchQuery != getSearchQuery()){
        return;
    }
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: {
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            srsearch: encodeURI(searchQuery) // thay đổi dấu cách thành %20
        },
        success: (data) => { // hàm này tự gọi khi dữ liệu được sever trả về
            processData(data);
        }
    })
}

function getSearchQuery() {
    const inputElement = $('.article-search-form__input');
    const search = inputElement.val();
    return search;
}

function processData(data) {
    // nếu dùng map 
    // const element = data.query.search.map(article =>)
    if (!(data.query && data.query.search)) {
        return;
    }
    for (let article of data.query.search) {
        
        const articleElement =
            `<a href="https://en.wikipedia.org/?curid=${article.pageid}" target="_blank"
                    class="article-view">
                    <h3 className="article-view__title">${article.title}</h3>
                    <p className="article-view__snippet">${article.snippet}</p>
                    </a>`
        $(".article-list").append(articleElement)
    }
}