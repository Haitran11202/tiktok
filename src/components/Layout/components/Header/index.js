import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faSpinner, faSearch } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from '~/assets/images'
import { useEffect, useState } from "react";
import { Wrapper as PropperWrapper } from "../../Popper";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setInterval(() => {
      setSearchResult([]);
    }, 0)
  })
  return (
    <header className={cx("wrapper")}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <h4 className={cx('search-title')}>
                  Accouts
                </h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}

          >
            <input placeholder="Search accounts and video" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
            </button >
            <FontAwesomeIcon className={cx('spinner')} icon={faSpinner}></FontAwesomeIcon>


            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
            <Button onClick={()=> alert('Hekllo')} >Log In</Button>
        </div>
      </div>
    </header>

  )
}

export default Header;
