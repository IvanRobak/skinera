'use client';

import React from 'react';
import ImageGallery from '@/components/common/ImageGallery';

interface ServiceGalleryProps {
  title: string;
  subtitle?: string;
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  columns?: 2 | 3 | 4;
  showTitles?: boolean;
  className?: string;
}

const ServiceGallerySection: React.FC<ServiceGalleryProps> = ({
  title,
  subtitle,
  images,
  columns = 3,
  showTitles = true,
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        {/* Gallery */}
        <ImageGallery
          images={images}
          columns={columns}
          showTitles={showTitles}
          className="max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
};

export default ServiceGallerySection;
