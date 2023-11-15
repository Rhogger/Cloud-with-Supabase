import {
  useRef,
  DragEvent,
  useEffect,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import PlusIcon from '../assets/icons/plus-circle.svg';

type DragNDropProps = {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const DragNDrop = ({ onChange }: DragNDropProps) => {
  const drop = useRef<HTMLDivElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer?.files;

    if (files && files.length > 0 && onChange) {
      const syntheticEvent = {
        target: { files },
      } as ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  useEffect(() => {
    const dropArea = drop.current;

    if (dropArea) {
      dropArea.addEventListener(
        'dragover',
        handleDragOver as unknown as EventListener
      );
      dropArea.addEventListener('drop', handleDrop as unknown as EventListener);

      return () => {
        dropArea.removeEventListener(
          'dragover',
          handleDragOver as unknown as EventListener
        );
        dropArea.removeEventListener(
          'drop',
          handleDrop as unknown as EventListener
        );
      };
    }
  }, [handleDragOver, handleDrop]);

  return (
    <div className='flex items-center justify-center w-96' ref={drop}>
      <label
        htmlFor='upload'
        className='flex flex-col justify-center items-center gap-4 w-full h-48 border-2 border-white/40 hover:border-white border-dashed rounded-2xl cursor-pointer hover:bg-zinc-700/30 transition-colors'>
        <img src={PlusIcon} alt='Arrow Icon' className='w-14' />

        <h2 className='text-lg text-zinc-300'>
          Click to <strong>upload</strong> or drag and drop
        </h2>

        <input
          className='hidden w-full h-full'
          type='file'
          name='upload'
          id='upload'
          multiple
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default DragNDrop;
