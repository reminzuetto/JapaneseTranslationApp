import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Quizz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const words = location.state?.words || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (words.length > 0) {
      generateOptions();
    }
