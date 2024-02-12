import React from 'react'
import {useFetch} from "../../index"
import { useParams } from 'react-router-dom'
import DetailsBanner from './DetailsBanner/DetailsBanner'
import VideoSection from './videoSection/VideoSection'
import './style.scss'
import Cast from './cast/Cast'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'


function Details() {
  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);
  
  return (
    <div>
      <DetailsBanner video={data?.result?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideoSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
