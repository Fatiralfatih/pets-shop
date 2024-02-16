import React from 'react'
import ButtonTransparant from '../atoms/ButtonTransparant'
import { MdNavigateNext } from 'react-icons/md'
import Card from '../organism/Card'
import CardBody from '../molecules/CardBody'
import HeadingContent from '../molecules/HeadingContent'

const PetsSection = () => {
    return (
        <section className='pt-10 pb-96'>
            <div className='container'>
                <HeadingContent
                    portal="Whats new?"
                    title="Take A Look At Some Of Our Pets"
                />
                <div className='pt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:gap-6'>
                    <Card>
                        <CardBody />
                    </Card>
                    <Card>
                        <CardBody />
                    </Card>
                    <Card>
                        <CardBody />
                    </Card>
                    <Card>
                        <CardBody />
                    </Card>
                </div>

                <div className=' mt-5 md:hidden'>
                    <ButtonTransparant name="View More" icon={<MdNavigateNext size={30} style={{ marginTop: '1px' }} />} />
                </div>
            </div>
        </section>
    )
}

export default PetsSection
