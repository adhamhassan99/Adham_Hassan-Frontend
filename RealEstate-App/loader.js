class navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="nav-container container text-center">
    <div class="row align-items-center navrow">
        <div class="col nav-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door"
                viewBox="0 0 16 16">
                <path
                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </svg>
            <strong>Estate</strong>
        </div>
        <div class="center-part col">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div class="col Buttons">
            <button class="navbtn login">login</button>
            <button class="navbtn signup">Signup</button>

        </div>

    </div>
</div>
      
      
      `;
    }
  }
      
customElements.define('my-navbar', navbar);





class PopDest extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div>
      <div class="container mt-5 d-flex flex-row pt-5">
          <div class="p-3 flex-grow-1">
              <h1>
                  Popular Destinations
              </h1>
              <p>From Historical cities to natural spiendours. Come see the best of world!</p>
          </div>
          <div class="pt-5 me-2">
              <button class="arrowbtn left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                  </svg>
              </button>
          </div>
          <div class="pt-5">
              <button class="arrowbtn right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
              </button>
          </div>
      </div>
      <div class="container d-flex flex-row mt-5">
          <div class="">
              <h1>hello</h1>
          </div>
      </div>
  </div>
      
      `;
    }
  }
      
customElements.define('poular-destinations', PopDest);