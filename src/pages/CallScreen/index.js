import React from 'react'
import ReactStars from "react-rating-stars-component";
import IconButton from '../../components/IconButton';

export default function CallScreen() {
  return (
    <div className="main-container" style={{paddingInline: 20}}>
        <div className='-top-14 relative w-full'>
            <div className='flex-1 w-full'>
                <div className='w-full mx-auto flex flex-row items-center justify-center'>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>VAI</strong>RIFY ID </h3>
                        <h4 className='text-sm'>897UY56</h4>
                    </div>
                    <div className='relative w-full'>
                        <img src={process.env.PUBLIC_URL + '/images/AdminFollowing1.png'} alt="Vairipay Add Logo" width={120} height={120} className='mx-auto' />
                        <div style={{right: '10px', bottom: '15px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/HotRodIcon2.png'} alt="Hot Rod Icon Second" /></div>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>TRU</strong>REVUⓒ </h3>
                        <div className='flex items-center gap-1'>
                            <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <h2 className='text-2xl font-bold'>Hot Rod</h2>
                </div>
                <div className='mt-[37px]'>
                    <h3 className='text-[30px] text-[#08CA10] font-bold mt-[24px]'>Voice Call</h3>
                    <h6 className='text-[30px] font-bold mt-[33px]'>Call Duration</h6>
                    <h6 className='text-[30px] font-bold mb-[32px]'>02:13:09</h6>
                </div>
            </div>
                <div className='mt-[135px] flex flex-row items-center justify-center'>
                <IconButton icon={<svg xmlns="http://www.w3.org/2000/svg" width="63" height="52" viewBox="0 0 63 52" fill="none">
                <path d="M23.2938 5.96397L13.6559 15.5998H2.59988C1.16345 15.5998 0 16.7632 0 18.1996V33.7989C0 35.2343 1.16345 36.3988 2.59988 36.3988H13.6559L23.2938 46.0346C24.922 47.6628 27.732 46.5188 27.732 44.1963V7.8023C27.732 5.47758 24.9198 4.33797 23.2938 5.96397ZM48.569 0.430565C47.3589 -0.363481 45.7329 -0.0287465 44.9389 1.18345C44.1438 2.39347 44.4817 4.01948 45.6918 4.81353C52.8707 9.52472 57.1551 17.4446 57.1551 26.0004C57.1551 34.5561 52.8707 42.476 45.6918 47.1872C44.4817 47.9802 44.1438 49.6073 44.9389 50.8162C45.7015 51.9764 47.3145 52.3935 48.569 51.5691C57.2266 45.8862 62.3971 36.3262 62.3971 25.9993C62.3971 15.6723 57.2266 6.11346 48.569 0.430565ZM51.9976 25.9993C51.9976 19.1172 48.5246 12.7897 42.7062 9.07408C41.4941 8.30061 39.8865 8.66026 39.1184 9.8822C38.3504 11.1041 38.7089 12.7215 39.9211 13.496C44.2272 16.2465 46.7978 20.9198 46.7978 25.9993C46.7978 31.0788 44.2272 35.7521 39.9211 38.5025C38.7089 39.276 38.3504 40.8933 39.1184 42.1164C39.8236 43.2386 41.4063 43.7564 42.7062 42.9245C48.5246 39.2088 51.9976 32.8825 51.9976 25.9993ZM36.6399 17.6721C35.3854 16.9864 33.8027 17.4381 33.1073 18.6958C32.4151 19.9535 32.8733 21.534 34.131 22.2284C35.5295 22.9964 36.3983 24.4426 36.3983 25.9993C36.3983 27.557 35.5295 29.0021 34.1321 29.7702C32.8744 30.4646 32.4161 32.0451 33.1084 33.3028C33.8049 34.5659 35.3887 35.0144 36.6409 34.3265C39.6991 32.642 41.5991 29.4517 41.5991 25.9982C41.5991 22.5447 39.6991 19.3555 36.6399 17.6721Z" fill="black"/>
                </svg>} />
                <IconButton icon={<svg xmlns="http://www.w3.org/2000/svg" width="143" height="144" viewBox="0 0 143 144" fill="none">
                <path d="M35.2653 36.4813C15.7888 56.6297 16.2198 88.6421 36.2279 107.983C56.236 127.324 88.2446 126.669 107.721 106.521C127.198 86.3725 126.767 54.3602 106.758 35.0193C86.7503 15.6784 54.7418 16.333 35.2653 36.4813Z" fill="#DB3002"/>
                <path opacity="0.2" d="M82.3836 75.4141C88.2586 80.2111 96.3727 77.0278 96.7063 76.9093C97.1501 76.6767 97.3705 76.4487 97.5909 76.2207C102.851 68.514 99.9963 63.9905 99.8801 63.6576L99.2008 63.001C67.3693 47.4479 47.1949 59.4827 40.5435 63.4183C39.9895 63.7649 39.5457 63.9975 39.2121 64.116C39.1018 64.23 38.8784 64.2346 38.7682 64.3486C38.5478 64.5766 38.4376 64.6906 38.3304 65.0281C38.3334 65.2515 36.3979 70.8787 41.2931 77.5955C41.5195 77.8143 41.8591 78.1427 42.1958 78.2475C42.4192 78.243 48.2521 79.9117 55.0106 75.6387C55.4544 75.4061 55.782 74.8406 55.8862 74.2797C56.1777 71.033 56.9071 67.1067 57.6725 65.8618C67.9015 62.0765 78.4381 64.5431 79.7937 65.6329C80.5831 66.1755 81.531 70.1792 81.6953 74.0872C81.7013 74.5341 82.044 75.0858 82.3836 75.4141Z" fill="#231F20"/>
                <path d="M84.6492 77.6019C90.5242 82.3988 98.6383 79.2156 98.9719 79.097C99.4157 78.8644 99.6362 78.6364 99.8566 78.4084C105.116 70.7017 102.262 66.1782 102.146 65.8454L101.466 65.1887C69.6349 49.6357 49.4605 61.6704 42.8091 65.606C42.2551 65.9526 41.8113 66.1852 41.4777 66.3038C41.3675 66.4178 41.1441 66.4223 41.0339 66.5364C40.8134 66.7644 40.7032 66.8784 40.596 67.2158C40.5991 67.4393 38.6635 73.0664 43.5587 79.7832C43.7851 80.0021 44.1248 80.3304 44.4614 80.4353C44.6848 80.4307 50.5177 82.0994 57.2762 77.8264C57.7201 77.5938 58.0477 77.0284 58.1519 76.4675C58.4434 73.2207 59.1727 69.2945 59.9381 68.0495C70.1671 64.2643 80.7038 66.7309 82.0593 67.8207C82.8488 68.3633 83.7966 72.367 83.9609 76.2749C83.9669 76.7218 84.3096 77.2736 84.6492 77.6019Z" fill="white"/>
                </svg>} />
                <IconButton icon={<svg xmlns="http://www.w3.org/2000/svg" width="49" height="62" viewBox="0 0 49 62" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7535 37.0749C43.4347 35.0721 43.7812 32.9708 43.7792 30.8554V26.9996C43.7792 26.4883 43.5761 25.9979 43.2145 25.6363C42.853 25.2748 42.3626 25.0717 41.8513 25.0717C41.34 25.0717 40.8496 25.2748 40.488 25.6363C40.1265 25.9979 39.9234 26.4883 39.9234 26.9996V30.8554C39.9234 31.9119 39.8192 32.9376 39.6149 33.9362L42.7535 37.0749ZM33.0291 43.7069C30.7053 45.2493 28.0068 46.1326 25.2208 46.263C22.4349 46.3933 19.6657 45.7658 17.208 44.4472C14.7504 43.1286 12.6963 41.1682 11.2644 38.7748C9.83254 36.3814 9.07645 33.6445 9.07664 30.8554V26.9996C9.07664 26.4883 8.87352 25.9979 8.51197 25.6363C8.15041 25.2748 7.66004 25.0717 7.14873 25.0717C6.63741 25.0717 6.14704 25.2748 5.78548 25.6363C5.42393 25.9979 5.22081 26.4883 5.22081 26.9996V30.8554C5.22075 35.6349 6.99597 40.2439 10.2021 43.7885C13.4082 47.333 17.8166 49.5603 22.5721 50.0382V57.8463H11.0046C10.4932 57.8463 10.0029 58.0494 9.64132 58.411C9.27977 58.7725 9.07664 59.2629 9.07664 59.7742C9.07664 60.2855 9.27977 60.7759 9.64132 61.1375C10.0029 61.499 10.4932 61.7021 11.0046 61.7021H37.9954C38.5068 61.7021 38.9971 61.499 39.3587 61.1375C39.7202 60.7759 39.9234 60.2855 39.9234 59.7742C39.9234 59.2629 39.7202 58.7725 39.3587 58.411C38.9971 58.0494 38.5068 57.8463 37.9954 57.8463H26.4279V50.0382C29.8114 49.7036 33.0451 48.4753 35.7976 46.4793L33.0291 43.7069ZM36.0675 30.3927V11.5762C36.0696 8.833 35.0966 6.1783 33.3224 4.08606C31.5482 1.99383 29.0881 0.600229 26.3814 0.154052C23.6747 -0.292125 20.8975 0.238162 18.5456 1.65025C16.1937 3.06233 14.4202 5.2643 13.5417 7.86306L36.0675 30.3927ZM12.9325 23.6065L30.2298 40.9037C28.4705 41.9069 26.4786 42.4306 24.4534 42.4224C22.4282 42.4143 20.4407 41.8746 18.6895 40.8573C16.9383 39.84 15.4849 38.3808 14.4746 36.6256C13.4643 34.8703 12.9326 32.8806 12.9325 30.8554V23.6065ZM46.2701 51.4996L0 5.22953L2.72993 2.49959L49 48.7697L46.2701 51.4957V51.4996Z" fill="black"/>
                </svg>} />
                </div>
        </div>
    </div>
  )
}
