import React from 'react';

function ChatBubble({ message, isSent }) {

    const styles = {
        rightArrow: {
            position: "absolute",
            backgroundColor: "#08CA10",
            //backgroundColor:"red",
            width: 20,
            height: 25,
            bottom: 0,
            borderBottomLeftRadius: 25,
            right: -10
          },
          
          rightArrowOverlap: {
            position: "absolute",
            backgroundColor: "#ffffff",
            //backgroundColor:"green",
            width: 20,
            height: 35,
            bottom: -6,
            borderBottomLeftRadius: 18,
            right: -20
          
          },
          
          /*Arrow head for recevied messages*/
          leftArrow: {
              position: "absolute",
              backgroundColor: "#dedede",
              //backgroundColor:"red",
              width: 20,
              height: 25,
              bottom: 0,
              borderBottomRightRadius: 25,
              left: -10
          },
          
          leftArrowOverlap: {
              position: "absolute",
              backgroundColor: "#ffffff",
              //backgroundColor:"green",
              width: 20,
              height: 35,
              bottom: -6,
              borderBottomRightRadius: 18,
              left: -20
          
          },
    }

  return (
    <div className={`w-full flex flex-row ${!isSent?' justify-start':' justify-end'}`}>
    {!isSent?
    (<div
      style={{
        position: 'relative',
        backgroundColor: "#dedede",
        padding:8,
        paddingInline: 16,
        marginTop: 8,
        marginLeft: "5%",
        maxWidth: '70%',
        alignSelf: 'flex-start',
        borderRadius: 12,
      }}
    >
        <p className='text-[16px]'>{message}</p>
        <div style={styles.leftArrow}></div>
        <div style={styles.leftArrowOverlap}></div>
    </div>)
    :(<div
        style={{
          position: 'relative',
          backgroundColor: "#08CA10",
          padding:8,
          paddingInline: 16,
          marginTop: 8,
          marginLeft: "5%",
          maxWidth: '70%',
          alignSelf: 'flex-start',
          borderRadius: 12,
        }}
      >
          <p className='text-white text-[16px]'>{message}</p>
          <div style={styles.rightArrow}></div>
          <div style={styles.rightArrowOverlap}></div>
      </div>
    )}
    </div>
  );
}

export default ChatBubble;