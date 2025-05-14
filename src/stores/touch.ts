

export const useTouchStore = defineStore('touch', () => {

    // 1.0  根据传递的数据参数，判断展示列表的长度
    const length = ref<number>(0); // 列表总长度
    // 当前索引
    const currentIndex = ref<number>(0);

    const startX = ref(0);
    const startY = ref(0);
    const towardsX = ref(0);
    const towardsY = ref(0);
    // 设置数据总长度
    const setLength = (len: number) => {
        
        length.value = len;
    }

    const resetTouchStatus = () => {
        startX.value = 0;
        startY.value = 0;
        towardsX.value = 0;
        towardsY.value = 0;
    }

    const handleTouchStart = (e: TouchEvent) => {
        startX.value = e.touches[0].clientX;
        startY.value = e.touches[0].clientY;
    }

    const handleTouchMove = (e: TouchEvent) => {
        towardsX.value = e.touches[0].clientX - startX.value;
        towardsY.value = e.touches[0].clientY - startY.value;
    }
    const setCurrIndex = (index: number) => {
        currentIndex.value = index;
    }

    const handleTouchEnd = () => {
        let currentIndexTemp = currentIndex.value;
        if (towardsX.value === 0 || Math.abs(towardsY.value) > 50) return;
        if (towardsX.value > 50) {
            if (currentIndexTemp === 0) return;
            currentIndexTemp--;
        } else if (towardsX.value < -50) {
            if (currentIndexTemp === (length.value - 1)) return;
            currentIndexTemp++;
        }
        setCurrIndex(currentIndexTemp);
        resetTouchStatus();
    }



    return {
        length,
        currentIndex,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        setCurrIndex,
        setLength
    };
});
