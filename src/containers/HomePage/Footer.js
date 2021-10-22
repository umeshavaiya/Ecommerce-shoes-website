import React from 'react'
import './Footer.css'
import { createFromIconfontCN, WhatsAppOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';

function Footer() {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div className="main__footer">
            <div className="footer__components">
                <div className="shoes__component">
                    <div className="Shoes__list">
                        <p>Shoes</p>
                        <h1>Home</h1>
                        <h1>Men</h1>
                        <h1>Women</h1>
                        <h1>Kids</h1>
                        <h1>Sale</h1>
                    </div>
                </div>
                <div className="Policies__component">
                    <div className="policies__list">
                        <p>Policies</p>
                        <h1>Terms & Condition</h1>
                        <h1>Returns & Exchange</h1>
                        <h1>Privacy Policy</h1>
                        <h1>Fees & Payments</h1>
                        <h1>Track Your Order</h1>
                    </div>
                </div>
                <div className="follow__component">
                    <h1 className="nohover">Follow Us</h1>
                    <div className="icon__list">
                        <IconFont className="all__icons" type="icon-facebook" style={{ fontSize: '35px', marginRight: '20px'}} />
                        <WhatsAppOutlined className="all__icons" style={{ fontSize: '35px', cursor: 'pointer', marginRight: '20px' }} />
                        <InstagramOutlined className="all__icons" style={{ fontSize: '35px', cursor: 'pointer' }} />
                    </div>
                    <div className="icon__list2">
                        <IconFont className="all__icons" type="icon-twitter" style={{ fontSize: '35px', cursor: 'pointer', marginRight: '20px' }} />
                        <YoutubeOutlined className="all__icons" style={{ fontSize: '35px', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
