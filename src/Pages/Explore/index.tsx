import React, { useEffect } from 'react'
import * as E from './style'
import * as C from '../../common-styles'
import { TbSearch } from 'react-icons/tb'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../Redux/store'
import { fetchExploreList } from '../../Redux/slices/exploreSlice'


const Explore: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchExploreList())
    }, [])
    return (
        <E.Explore>
            <E.Header>
                <C.IconInputWrapper className='input-wrapper'>
                    <C.CommonInput className='explore-input' placeholder="Search Creators" />
                    <TbSearch className="input-icon" size={18} />
                </C.IconInputWrapper>

                <h1 className='mt-10 mb-0 text-white font-bold text-3xl'>Explore</h1>
            </E.Header>
            <E.ProfileWrapper>
                {Array(10).fill('').map((_, index) => (
                    <ProfileCard key={`profile-card-${index}`} />
                ))}
            </E.ProfileWrapper>
        </E.Explore >
    )
}

export default Explore
