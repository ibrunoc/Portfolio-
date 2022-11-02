import './Error.modules.scss';

export function Error() {
  return (
    <div className='ContainerError'>
	    <h1 className='TitleError'>ERROR 404</h1>
        <p className='SubError'>página não encontrada!</p>		
	</div>
  );
}