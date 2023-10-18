import{l as f,a,b as n,c as e,d as r}from"./dark-theme-626332ef.js";const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgBrVHBDcIwDHQQf7IB2QC6CWxQJugqjMIIbECZoGUCYIJwRkY1IW4Q9KRTIvd8PjdEf8LlijHGNY5NUj4459pUO6MpEhgTS3gm0gk82HzR2Ij2HUjhwWupmzWstT5Gda9fQr7nNKPuODswCDsrZfoKN8rtN8CL5meDAPa6MB8xaGmYdiQDqcFFphDeeKvqOznZ/K4bcisEsrGiwgp78IQ/vZQ0GguwBiszAWL3IjjTJ9iwEs10eABLk1zammnIfAAAAABJRU5ErkJggg==",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZbvDYIwEMUfxu/qBNYJdARG0Q0cwREYwRHcwBFwA7oBMEFtwzVWAvQfREn4JeRCoa8v1/ZaYGFOCCEKYafw0Vxh4cck5gvNH8O08CRJDvrlP9eAzERKK/qJSJQGaaVd3/sywCkyxLOlWMHDwJgMGuhFVxVEYtPxzoDUulJFPBltTD6l+gZPhgxwLd5qVwMzipoUTaqP+DbLTC1fA2NgnX9rBhC3E6IMVC2RSRgyUCPeAKPIEWBgjAzovjUmMOBSWKxrYA1/A5l8VGF5GW0PNNvyjgkMbMxGeZSqgS+tNvVvVxEaZRfsEM6eIkeAAU7xiHDCDiKFLKNbqu+ioxy79GfRB5rse9NXbbqkWLckGU/F5wqfIRQSy0U4uYtpFyNnEisdBi3p3xsW5sAbPLFFG+eM+E0AAAAASUVORK5CYII=",g="/bookshelf/assets/img-book-Mob1x-1fe4bd25.png",B="/bookshelf/assets/img-book-Mob2x-261d5249.png";document.addEventListener("DOMContentLoaded",f.onDOMContentLoaded);const b=document.querySelector(".book-list"),s="books";function k(){const o=`
  <div class="empty-list">
      <p class="empty-list-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
         class="empty-list-img"
         src="${g}"
         srcset="
         ${g} 1x,
         ${B} 2x
         "
        alt="books"
        width="265"
        height="198"
         />
      </div>`;b.innerHTML=o}function m(){const i=(JSON.parse(localStorage.getItem(s))||[]).map(({_id:A,book_image:l,title:t,description:c,author:h,amazon_product_url:x,list_name:p,buy_links:w})=>`
      <li class="book_li book js-card" data-book-id="${A}">
        <div class="book_li-img">
              <img class="book_li-i" src="${l||"../img/def-placeholder.png"}" alt="${t}" />
            </div>
            <div class="book_li-info">
              <div class="book_li-header">
                <button class="book_li-btn js-card__delete">
                  <img
                    class="book_li-icon js-card__delete"
                    src="${d}"
                    srcset="
                      ${d} 1x,
                      ${I} 2x
                    "
                    alt="basket"
                    width="16"
                    height="16"
                  />
                </button>
                <h2 class="book_li-title">${t.trim()}</h2>
                <h3 class="book_li-category">${p.trim()}</h3>
              </div>
              <p class="book_li-description">
                ${c.trim()}
              </p>
              <div class="book_li-footer">
                <p class="book_li-author">${h.trim()}</p>
                <ul class="book-links">
                  <li>
                    <a class="book_link" href="${x}">
                      <img
                        class="book_link-amazon"
                        srcset="${a} 1x,
                        ${n} 2x"
                        src="${a}"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                      <img
                        class="book_link-amazon hovered"
                        srcset="${a} 1x,
                        ${n} 2x"
                        src="${a}"
                        alt="amazon"
                        width="32"
                        height="11"
                      />
                    </a>
                  </li>
                  <li>
                   <a class="book_link" href="${w[1].url}" target="_blank"
                   rel="noopener noreferrer">

                      <img
                        class="book_link-book"
                       srcset="${e} 1x,
                        ${r} 2x"
                        src="${e}"
                        alt="book"
                        width="16"
                        height="16"
                      />
                      <img
                        class="book_link-book hovered"
                        srcset="${e} 1x,
                        ${r} 2x"
                        src="${e}"
                        alt="book"
                        width="16"
                        height="16"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      </li>
    `).join("");i.length===0?k():b.innerHTML=i}function C(o){if(o.target.classList.contains("js-card__delete")){const A=o.target.closest(".js-card").dataset.bookId,t=(JSON.parse(localStorage.getItem(s))||[]).filter(c=>c._id!==A);localStorage.setItem(s,JSON.stringify(t)),m()}}window.addEventListener("click",o=>C(o));window.onload=()=>{localStorage.getItem(s)!==null||localStorage.getItem(s)!=[]?m():k()};
