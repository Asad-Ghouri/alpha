
import Link from 'next/link'

import { Header } from '../components/Header';

export default function MainSwap() {


    return (
        <div className='homepage'>
            <Header />
            <div className="aaa">
                <iframe
                    src="https://shopinose.com/"
                    id='Homeiframe'
                    sandbox="allow-popups"
                    height="3280px"
                    width="100%"
                ></iframe>
            </div>
        </div>
    );
}
function useWeb3React<T>(): { library: any; chainId: any } {
    throw new Error("Function not implemented.");
}
