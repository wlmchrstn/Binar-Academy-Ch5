/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getCar } from '../../stores/actions/ActionListCar';
import { formatRupiah } from '../../utils/helper';
import { useParams } from 'react-router-dom';
import styles from './search-detail.module.scss';

// Components
import Paragraph from '../../components/paragraph/paragraph';
import Button from '../../components/button/button';

// Assets
import users from '../../assets/icons/fi_users.svg';
import settings from '../../assets/icons/fi_settings.svg';
import calendar from '../../assets/icons/fi_calendar.svg';
import chevron from '../../assets/icons/fi_chevron-up.svg';

const SearchDetail = (props) => {
    const [accordion,setAccordion] = useState(false);

    let { id } = useParams();
    useEffect(() => {
        props.getCar(id);
    },[id]);

    return (
        <div className={styles.root}>
            <div className={styles['detail-wrapper']}>
                <div className={styles.content}>
                    <div className={styles.detail}>
                        <div style={{ marginBottom: '16px' }}>
                            <Paragraph variant={'body-1'} weight={'bold'} color={'black'}>
                                {'Tentang Paket'}
                            </Paragraph>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <Paragraph variant={'body-1'} weight={'light'} color={'black'}>
                                {'Include'}
                            </Paragraph>
                        </div>
                        <ul style={{ marginBottom: '16px' }}>
                            <li>
                                {'Apa saja yang termasuk dalam paket misal durasi max 12 jam'}
                            </li>
                            <li>
                                {'Sudah termasuk bensin selama 12 jam'}
                            </li>
                            <li>
                                {'Sudah termasuk Tiket Wisata'}
                            </li>
                            <li>
                                {'Sudah termasuk pajak'}
                            </li>
                        </ul>
                        <div style={{ marginBottom: '8px' }}>
                            <Paragraph variant={'body-1'} weight={'light'} color={'black'}>
                                {'Exclude'}
                            </Paragraph>
                        </div>
                        <ul style={{ marginBottom: '26px' }}>
                            <li>
                                {'Tidak termasuk biaya makan sopir Rp 75.000/hari'}
                            </li>
                            <li>
                                {'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam'}
                            </li>
                            <li>
                                {'Tidak termasuk akomodasi penginapan'}
                            </li>
                        </ul>
                        <div className={styles['detail-accordion']} onClick={() => setAccordion(!accordion)}>
                            <Paragraph variant={'body-1'} weight={'bold'} color={'black'}>
                                {'Refund, Reschedule, Overtime'}
                                {accordion}
                            </Paragraph>
                            <div className={classNames(styles['detail-accordion-image'], accordion ? styles['detail-accordion-rotate'] : '')}>
                                <img src={chevron} alt={'fi_chevron'} />
                            </div>
                        </div>
                        <div className={classNames(styles['detail-list'], accordion ? styles['detail-accordion-open'] : '')}>
                            <ul>
                                <li>
                                    {'Tidak termasuk biaya makan sopir Rp 75.000/hari'}
                                </li>
                                <li>
                                    {'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam'}
                                </li>
                                <li>
                                    {'Tidak termasuk akomodasi penginapan'}
                                </li>
                                <li>
                                    {'Tidak termasuk biaya makan sopir Rp 75.000/hari'}
                                </li>
                                <li>
                                    {'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam'}
                                </li>
                                <li>
                                    {'Tidak termasuk akomodasi penginapan'}
                                </li>
                                <li>
                                    {'Tidak termasuk biaya makan sopir Rp 75.000/hari'}
                                </li>
                                <li>
                                    {'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam'}
                                </li>
                                <li>
                                    {'Tidak termasuk akomodasi penginapan'}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles['card-image']}>
                            <img src={props.car?.image} alt={props.car?.name} />
                        </div>
                        <div style={{ marginBottom: '8px', marginTop: '24px' }}>
                            <Paragraph variant={'body-1'} weight={'bold'} color={'black'}>
                                {`${props.car?.name}/${props.car?.category}`}
                            </Paragraph>
                        </div>
                        <div className={styles['card-list']}>
                            <div className={styles['card-item']}>
                                <img src={users} alt={'fi_users'} />
                                <Paragraph variant={'body-3'} color={'grey'}>
                                    {'4 orang'}
                                </Paragraph>
                            </div>
                            <div className={styles['card-item']}>
                                <img src={settings} alt={'fi_settings'} />
                                <Paragraph variant={'body-3'} color={'grey'}>
                                    {'Manual'}
                                </Paragraph>
                            </div>
                            <div className={styles['card-item']}>
                                <img src={calendar} alt={'fi_calendar'} />
                                <Paragraph variant={'body-3'} color={'grey'}>
                                    {'Tahun 2020'}
                                </Paragraph>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <Paragraph variant={'body-1'} weight={'light'} color={'black'}>
                                {'Total'}
                            </Paragraph>
                            <Paragraph variant={'body-1'} weight={'bold'} color={'black'}>
                                {formatRupiah(props.car?.price)}
                            </Paragraph>
                        </div>
                        <Button variant={'secondary'} type={'button'}>
                            {'Lanjutkan Pembayaran'}
                        </Button>
                    </div>
                </div>
                <div className={styles.content} style={{ alignSelf: 'center', marginTop: '24px' }}>
                    <div style={{ width: '178px' }}>
                        <Button type={'button'} variant={'secondary'}>
                            {'Lanjutkan Pembayaran'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        car: state.ReducerListCar.car,
    };
};

const SearchDetailConnect = connect(mapStateToProps, { getCar })(SearchDetail);

export default SearchDetailConnect;
