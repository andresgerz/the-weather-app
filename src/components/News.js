import moment from 'moment'

const News = () => (
  <div className="news-container">
    <div className="item">
      <div className="item-date">{moment().day(0).locale("en").format("DD MMM")}</div>
      <div className="item-text">
        <div><p><strong>Lorem Ipsum</strong></p></div>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique augue nec metus aliquam, vel lacinia sapien pretium. Nulla tincidunt at ante ut rutrum. Donec ut tellus tristique, lacinia tellus et, consequat lorem. Pellentesque suscipit laoreet gravida. 
        </p></div>
      </div>
    </div>
    
    <div className="item">
      <div className="item-date">{moment().day(0).locale("en").format("DD MMM")}</div>
      <div className="item-text">
        <div><p><strong>Lorem Ipsum</strong></p></div>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique augue nec metus aliquam, vel lacinia sapien pretium. Nulla tincidunt at ante ut rutrum. Donec ut tellus tristique, lacinia tellus et, consequat lorem. Pellentesque suscipit laoreet gravida. 
        </p></div>
      </div>
    </div>
    
    <div className="item">
      <div className="item-date">{moment().day(0).locale("en").format("DD MMM")}</div>
      <div className="item-text">
        <div><p><strong>Lorem Ipsum</strong></p></div>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique augue nec metus aliquam, vel lacinia sapien pretium. Nulla tincidunt at ante ut rutrum. Donec ut tellus tristique, lacinia tellus et, consequat lorem. Pellentesque suscipit laoreet gravida. 
        </p></div>
      </div>
    </div>
  </div>
)

export default News;