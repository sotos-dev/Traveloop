import { useModal } from "../../context/ModalContext"
import styles from "./index.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import { useRef } from "react"
import AuthUser from "../../components/auth"

const Modal = () => {
  // Ref
  const registerCard = useRef()
  const loginCard = useRef()
  // Modal Hook
  const { showAuthModal, setShowAuthModal } = useModal()

  // Click Outside - Close Modal
  const closeModal = (e) => {
    if (!registerCard.current.contains(e.target)) {
      setShowAuthModal(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className={styles.modalWrapper}>
            <div ref={registerCard}>{showAuthModal && <AuthUser />}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal
