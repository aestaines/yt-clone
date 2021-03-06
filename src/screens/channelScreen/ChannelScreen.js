import numeral from 'numeral';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Video from '../../components/video/Video';
import { getChannelDetails } from '../../redux/actions/channel.action';
import { getVideosByChannel } from '../../redux/actions/videos.actions';
import './_channelScreen.scss';

const ChannelScreen = () => {

    const {channelId} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosByChannel(channelId));
        dispatch(getChannelDetails(channelId));
    },[dispatch,channelId]);

    const {videos, loading} = useSelector(state => state.channelVideo)
    const {snippet, statistics} = useSelector(state => state.channelDetails.channel)


    return (
            <>
                <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader" >
                    <div className="d-flex align-items-center">
                        <img src={snippet?.thumbnails?.default?.url} alt="" />

                        <div className="ml-3 channelHeader__details">
                            <h3>{snippet?.title}</h3>
                            <span>
                                {numeral(statistics?.subscriberCount).format("0.a")}{" "}subscriber
                            </span>
                        </div>
                    </div>
                    <button>Subscribe</button>
                </div>

                <Container>
                    <Row className="mt-2">
                        {
                            !loading ? 
                            videos
                            ?.map(video => 
                                <Col md={4} lg={3}> 
                                    <Video video={video} channelScreen/>    
                                </Col>
                            )
                            : 
                            [...Array(15)]
                            .map((video,i) =>
                                <Col md={4} lg={3} key={i}>
                                    <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                                        <Skeleton 
                                            height="160px" 
                                            width="100%"
                                        />                                    
                                    </SkeletonTheme>
                                </Col>
                            )    
                        }
                    </Row>
                </Container> 

            </>  
        
    )
}

export default ChannelScreen
