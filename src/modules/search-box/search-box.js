import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setDriver } from '../../stores/actions/ActionListCar';
import classNames from 'classnames';
import styles from './search-box.module.scss';

// Components
import Button from '../../components/button/button';
import Paragraph from '../../components/paragraph/paragraph';

const SearchBox = (props) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (params) => {
        props.setDriver(params.driver);
        if (params.driver !== 'Pilih Tipe Driver') {
            navigate('/search');
        }
    };

    return (
        <div className={styles.root}>
            <form className={styles.search} onSubmit={handleSubmit(onSubmit)}>
                <div style={{ flex: '1 1 0' }}>
                    {!props.step ? null : (
                        <div style={{ marginBottom: '16px'}}>
                            <Paragraph variant={'body-1'} weight={'bold'} color={'black'}>
                                {'Pencarianmu'}
                            </Paragraph>
                        </div>
                    )}
                    <div className={styles.wrapper}>
                        <div className={styles['wrapper-input']}>
                            <Paragraph variant={'body-2'} weight={'light'} color={'grey-1'}>
                                {'Tipe Driver'}
                            </Paragraph>
                            {props.step === 'detail' ? (
                                <div className={styles['input-disabled']} />
                            ) : (
                                <div className={styles.input}>
                                    <select defaultValue={props.driver} {...register('driver')} disabled={props.step === 'detail'}>
                                        <option value={'Pilih Tipe Driver'} disabled>
                                            {'Pilih Tipe Driver'}
                                        </option>
                                        <option value={'Dengan Sopir'}>
                                            {'Dengan Sopir'}
                                        </option>
                                        <option value={'Tanpa Sopir'}>
                                            {'Tanpa Sopir (Lepas Kunci)'}
                                        </option>
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className={styles['wrapper-input']}>
                            <Paragraph variant={'body-2'} weight={'light'} color={'grey-1'}>
                                {'Tanggal'}
                            </Paragraph>
                            {props.step === 'detail' ? (
                                <div className={styles['input-disabled']} />
                            ) : (
                                <div className={styles.input}>
                                    <input type={'date'} {...register('tanggal')} disabled={props.step === 'detail'} />
                                </div>
                            )}
                        </div>
                        <div className={styles['wrapper-input']}>
                            <Paragraph variant={'body-2'} weight={'light'} color={'grey-1'}>
                                {'Waktu Jemput/Ambil'}
                            </Paragraph>
                            {props.step === 'detail' ? (
                                <div className={styles['input-disabled']} />
                            ) : (
                                <div className={styles.input}>
                                    <select defaultValue={'Pilih Waktu'} {...register('waktu')} disabled={props.step === 'detail'}>
                                        <option value='Pilih Waktu' disabled>
                                            {'Pilih Waktu'}
                                        </option>
                                        <option value={'08.00'}>
                                            {'08.00'}
                                        </option>
                                        <option value={'09.00'}>
                                            {'09.00'}
                                        </option>
                                        <option value={'10.00'}>
                                            {'10.00'}
                                        </option>
                                        <option value={'11.00'}>
                                            {'11.00'}
                                        </option>
                                        <option value={'12.00'}>
                                            {'12.00'}
                                        </option>
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className={styles['wrapper-input']}>
                            <Paragraph variant={'body-2'} weight={'light'} color={'grey-1'}>
                                {'Jumlah Penumpang (optional)'}
                            </Paragraph>
                            {props.step === 'detail' ? (
                                <div className={styles['input-disabled']} />
                            ) : (
                                <div className={styles.input}>
                                    <input type={'text'} placeholder={'Jumlah Penumpang'} {...register('penumpang')} disabled={props.step === 'detail'} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {!props.step ? (
                    <div className={styles.button}>
                        <Button variant={'secondary'} type={'submit'}>
                            {'Cari Mobil'}
                        </Button>
                    </div>
                ) : props.step === 'list' ? (
                    <div className={classNames(styles.button, styles['button-edit'])}>
                        <Button variant={'primary-outlined'} type={'submit'}>
                            {'Edit'}
                        </Button>
                    </div>
                ) : null}
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        driver: state.ReducerListCar.driver,
    };
};

const SearchBoxConnect = connect(mapStateToProps, { setDriver })(SearchBox);

export default SearchBoxConnect;
