import React,{useContext} from 'react'
import "./specialBrands.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/Context'

const SpecialBrand = () => {

    const product= useContext(CartContext)
  return (
    <section className="special-brand mt-2">
        <div className="row">
            <div className="col-md-12 titlediv px-0">
                <h3 className="header-title">برندهای برتر</h3>
            </div>
            <div className="col-md-12 px-0">
                <div className="row d-flex">
                    <div className="col-6 col-md-3  mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("لافارر")}><img src="images/637580669189465395.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("سی گل")}><img src="images/637032027938892930.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("کالیستا")}><img src="images/637126174838732237.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("سینره")}><img src="images/638129392760982513.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("مورینگا")}><img src="images/638129393371316899.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("سریتا")}><img src="images/637206464534839243.png" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("ساین اسکین")}><img src="images/637908462431038619.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("نئودرم")}><img src="images/637500416348331016.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("پریم")}><img src="images/637059568918691967.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/'onClick={()=>product.filterByBrand("شون")}><img src="images/637206464411658662.png" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("هیدرودرم")}><img src="images/637908462588411742.jpg" alt="" /></Link>
                    </div>

                    <div className="col-6 col-md-3 mt-2 specialbrandbox">
                        <Link to='/products/' onClick={()=>product.filterByBrand("دیپ سنس")}><img src="images/638046462669313398.jpg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialBrand
