"use client";
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import Header from './_components/header';
import Bottom from './_components/bottom';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const onDrop = useCallback((acceptedFiles: any) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    setLoading(true);

    fetch('http://localhost:4000/evaluate/upload', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: '*/*',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setEvaluationResult(data.feedback.replace(/\*/g, ''));
        setLoading(false);
        toast({
          variant: 'success',
          title: 'Sucesso',
          description: 'Currículo avaliado com sucesso!',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        toast({
          variant: 'destructive',
          title: 'Erro',
          description: 'Erro ao avaliar currículo',
        });
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F7EB] text-[#3D2C2E]">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center flex-1 px-4 py-8"
      >
        <h1 className="font-bold text-2xl text-center mb-4">
          Adicione seu currículo e veja a avaliação!
        </h1>

        <Image
          src="/curriculum-main2.png"
          alt="Image"
          width={200}
          height={200}
          className="max-w-full max-h-full mb-8"
        />

        <div
          {...getRootProps()}
          className="w-full max-w-md mt-4 p-4 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer text-center"
        >
          <input {...getInputProps()} />
          {loading ? (
            <p>Carregando...</p>
          ) : isDragActive ? (
            <p>Solte o arquivo aqui ...</p>
          ) : (
            <p>
              Clique ou arraste o arquivo do currículo para esta área para fazer upload
            </p>
          )}
        </div>

        {evaluationResult && (
          <motion.div
            className="mt-8 p-4 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-2">Avaliação do Currículo</h2>
            <pre className="whitespace-pre-wrap">
              {evaluationResult}
            </pre>
          </motion.div>
        )}
      </motion.div>

      <Bottom />
    </div>
  );
}
